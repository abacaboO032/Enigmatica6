events.listen('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: [['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'], 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: Item.of('buildersaddition:large_candle', 4),
            inputs: ['#forge:wax', '#forge:wax', '#forge:wax', '#forge:string']
        },
        {
            output: 'quark:root',
            inputs: ['minecraft:vine', '#forge:dyes/brown']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
