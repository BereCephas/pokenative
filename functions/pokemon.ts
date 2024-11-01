export function getPokemonId(url:string):number {
    const parts=url.split('/');
    const id= parseInt(parts.at(-2)!,10) 
    return id;

}