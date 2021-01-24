export const filtered = (tracks, s) => {
    let search = s.toUpperCase()
    let newList = []
    if(s !== null) {
        tracks.forEach(track => {
            let searchable = track.name.toUpperCase()
            if (searchable.startsWith(search)){
                newList.push(track)
            }
        })
    }
    else{
        newList = tracks
    }
    let sorted = newList.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    return sorted
}
export const reduceList = (list) => {
    let newList = list.reduce((acc, t) => {
        let letter = t.name[0];
        let check = (/[a-zA-Z]/).test(letter)
        if(check) {
            if (!acc[letter.toUpperCase()]) {
                letter = letter.toUpperCase()
                acc[letter] = {letter: letter, tracks: [t] } 
            }
            else {
                acc[letter.toUpperCase()].tracks.push(t);
            }
        }
        else {
            if (!acc["#"]){
                acc["#"] = {letter:"#", tracks: [t]}
            }
            else {
                acc["#"].tracks.push(t)
            }
        }
        return acc
      }, {});
    return newList
}
