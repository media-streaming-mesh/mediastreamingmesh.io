export const parseAuthors = (authors) => {
    if (typeof authors === "string") {
        return authors
    } else {
        let newArr = []
        for (let i = 0; i < authors.length; i++) {
            if (i === authors.length - 1) {
                newArr.push(authors[i]);
            } else if (i === authors.length - 2) {
                newArr.push(`${authors[i]} & `);
            } else {
                newArr.push(`${authors[i]}, `);
            }
        }
        return newArr.join("")
    }
}