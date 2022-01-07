export const uuid = () => {
    let random = 0,
        results = '';

    for (let i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i >= 8 && i <= 20 && i % 4 === 0) {
            results += '-';
        }

        results += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
        .toString(16);
    }

    return results;
}
