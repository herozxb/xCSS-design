import { produce } from 'immer'

export function factory(set, get) {
  return {
    removeShadow(index) {
      const targetId = get().targetId;
      set(produce((state) => {
        state.elementCollection[targetId]["css"].boxShadow.splice(index, 1)
      }));
    },
    addShadow() {
      const targetId = get().targetId;
      set(produce((state) => {
        state.elementCollection[targetId]["css"].boxShadow.push({
          enableInset: false,
          offsetX: 5,
          offsetY: 5,
          blurRadius: 20,
          spreadRadius: 0,
          color: 'grey',
          collapsePanel: false,
          enabled: true
        })
      }));
    },
    updateShadow(index, name, value) {
      const targetId = get().targetId;
      set(produce((state) => {
        state.elementCollection[targetId]["css"].boxShadow[index][name] = value;
      }));
    },

  }
}

