import { produce } from 'immer'

export function factory(set, get) {
  return {
    enableBorderAllInOne() {
      set(produce((state) => {
        const targetId = get().targetId;
        const selectedElementState = get().getTargetElementState()
        const selectedElementStateTopBorder = selectedElementState.border.top;

        state.elementCollection[targetId]["css"].borderAllInOne = true;
        state.elementCollection[targetId]["css"].border.top = selectedElementStateTopBorder;
        state.elementCollection[targetId]["css"].border.bottom = selectedElementStateTopBorder;
        state.elementCollection[targetId]["css"].border.left = selectedElementStateTopBorder;
        state.elementCollection[targetId]["css"].border.right = selectedElementStateTopBorder;
      }));
    },
    disableBorderAllInOne() {
      const targetId = get().targetId;
      set(produce((state) => {
        state.elementCollection[targetId]["css"].borderAllInOne = false;
      }));
    },
    toggleBorderAllInOne() {
      if (get().getTargetStyle("borderAllInOne")) {
        get().disableBorderAllInOne();
      } else {
        get().enableBorderAllInOne();
      }
    },
    toggleEnableBorder() {
      const targetId = get().targetId;
      set(produce((state) => {
        if (state.elementCollection[targetId]["css"].borderEnabled) {
          state.elementCollection[targetId]["css"].borderEnabled = false;
        } else {
          state.elementCollection[targetId]["css"].borderEnabled = true;
        }
      }));
    },
    updateBorder(name, value, position) {
        const targetId = get().targetId;
        set(produce((state) => {
          if (state.elementCollection[targetId]["css"].borderAllInOne) {
            state.elementCollection[targetId]["css"].border['top'][name] = value;
            state.elementCollection[targetId]["css"].border['bottom'][name] = value;
            state.elementCollection[targetId]["css"].border['left'][name] = value;
            state.elementCollection[targetId]["css"].border['right'][name] = value;
          } else {
            state.elementCollection[targetId]["css"].border[position][name] = value;
          }
        }));
    },
  }
}

