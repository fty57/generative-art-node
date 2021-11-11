// Ordem das Camadas
const layersOrder = [    
    { name: '7-background', number: 4 },
    { name: '6-body', number: 5 },
    { name: '5-base-bird', number: 1 },
    { name: '4-beak', number: 5 },
    { name: '3-eye', number: 4 },
    { name: '2-hat', number: 5 },
    { name: '1-acessory', number: 5 },
];
  
// Formato da Imagem
const format = {
    width: 1024,
    height: 1024
};

// Raridade
const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10000;

module.exports = { layersOrder, format, rarity, defaultEdition };