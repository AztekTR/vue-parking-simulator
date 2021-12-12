const randint = (min: number, max: number): number => ~~(Math.random() * (max - min)) + min;

export default randint;