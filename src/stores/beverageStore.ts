import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json"
import creamers from "../data/creamers.json"
import syrups from "../data/syrups.json"
import { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCream: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    currentName: "",
    beverageList: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
  }),

  actions: {
    makeBeverage() {
      this.currentBeverage = {
        name:this.currentName,
        id: `${this.currentTemp}-${this.currentBase.id}-${this.currentCream.id}-${this.currentSyrup.id}`,
        temp:this.currentTemp,
        base:this.currentBase,
        syrup:this.currentSyrup,
        creamer:this.currentCream
      }
      this.beverageList.push(this.currentBeverage);
    },
    showBeverage(beverage: BeverageType) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCream = beverage.creamer;
      this.currentSyrup = beverage.syrup;
      this.currentName = beverage.name;
      this.currentBeverage = beverage;
    },
  },
  persist: true,
});
