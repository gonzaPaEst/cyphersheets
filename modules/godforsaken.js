import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godforsaken sheets => overrides templates
    
  export class GodforsakenArcher extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godforsaken/godforsaken-archer.html"
      });
    }
  }

  export class GodforsakenArcherAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godforsaken/godforsaken-archer-animated.html`
      });
    }
  }

  export class GodforsakenCombat extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/cyphersheets/templates/godforsaken/godforsaken-combat.html"
      });
    }
  }

  export class GodforsakenCombatAnimated extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: `modules/cyphersheets/templates/godforsaken/godforsaken-combat-animated.html`
      });
    }
  }