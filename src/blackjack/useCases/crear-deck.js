import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipos Example: ['C','D','H','S'],
 * @param {Array<String>} tiposEsp example: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos, tiposEsp) => {

    if(!tipos || !tipos.length === 0) throw new Error("Tipos de carta es obligatorio");
    

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of tiposEsp ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}