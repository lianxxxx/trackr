"use client";

import { useRef, useState } from "react";

const LONG_PRESS_MS = 500;

// Long press an item to enter select mode, then tap items to toggle them.
export function useBulkSelect(ids: string[]) {
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressed = useRef(false);

  const allSelected = ids.length > 0 && ids.every((id) => selected.has(id));

  const toggleOne = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(ids));

  const clear = () => setSelected(new Set());

  const exit = () => {
    setSelecting(false);
    setSelected(new Set());
  };

  const unselect = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

  const cancelPress = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = null;
  };

  // Spread onto each selectable row or card
  const itemProps = (id: string) => ({
    onPointerDown: () => {
      longPressed.current = false;
      pressTimer.current = setTimeout(() => {
        longPressed.current = true;
        setSelecting(true);
        setSelected((prev) => new Set(prev).add(id));
      }, LONG_PRESS_MS);
    },
    onPointerUp: cancelPress,
    onPointerLeave: cancelPress,
    onPointerCancel: cancelPress,
    onClick: () => {
      if (longPressed.current) {
        longPressed.current = false;
        return;
      }
      if (selecting) toggleOne(id);
    },
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  });

  return {
    selecting,
    selected,
    allSelected,
    toggleOne,
    toggleAll,
    clear,
    exit,
    unselect,
    itemProps,
  };
}
