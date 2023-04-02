import { createContext } from "react";
import React from 'react';
import create from "zustand";


export const useStore = create((set) => ({
  isPink: false,
  setPink: () => set((state) => ({ isPink: !state.isPink }))
}));

