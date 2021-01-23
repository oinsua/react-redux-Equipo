

export const apiCallPlayer = (method, url) => {
        return fetch(url, {method})
                    .then(response => response.json())
}
/*Conjunto de api para agregar y eliminar un titular */
export const apiAddTitular = (item) => {
        return new Promise((resolve, reject) => {
                setTimeout(()=>{
                        resolve(item);
                }, 0)
        });
}

export const apiDeleteTitular = (item) => {
        return new Promise((resolve, reject) => {
                setTimeout(()=>{
                        resolve(item);
                }, 0)
        });
}

/*Conjunto de api para agregar y eliminar un sustituto */
export const apiAddSubstitut = (item) => {
        return new Promise((resolve, reject) => {
                setTimeout(()=>{
                        resolve(item);
                }, 0)
        });
}

export const apiDeleteSubstitut = (item) => {
        return new Promise((resolve, reject) => {
                setTimeout(()=>{
                        resolve(item);
                }, 0)
        });
}