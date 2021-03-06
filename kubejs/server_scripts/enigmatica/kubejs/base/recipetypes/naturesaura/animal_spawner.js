events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['emendatusenigmatica:arcane_gem', 'naturesaura:gold_leaf'],
                entity: 'ars_nouveau:carbuncle',
                aura: 100000,
                time: 100
            },
            {
                inputs: ['emendatusenigmatica:arcane_gem', 'naturesaura:ancient_sapling'],
                entity: 'ars_nouveau:sylph',
                aura: 100000,
                time: 100
            },
            {
                inputs: ['minecraft:cod', 'minecraft:iron_bars'],
                entity: 'quark:crab',
                aura: 30000,
                time: 40
            },
            {
                inputs: ['minecraft:spider_eye', 'minecraft:lily_pad'],
                entity: 'quark:frog',
                aura: 30000,
                time: 40
            },
            {
                inputs: ['minecraft:leather', 'minecraft:coal'],
                entity: 'quark:foxhound',
                aura: 150000,
                time: 120
            },
            {
                inputs: ['minecraft:coarse_dirt', 'industrialforegoing:fertilizer'],
                entity: 'alexsmobs:cockroach',
                aura: 30000,
                time: 40
            },
            {
                inputs: ['minecraft:coarse_dirt', 'minecraft:brown_mushroom'],
                entity: 'alexsmobs:cockroach',
                aura: 150000,
                time: 120
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let ingredients = [Ingredient.of('naturesaura:birth_spirit').toJson()];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'naturesaura:animal_spawner',
            ingredients: ingredients,
            entity: recipe.entity,
            aura: recipe.aura,
            time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
