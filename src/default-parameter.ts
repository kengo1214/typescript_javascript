export {};

const nextYearSalary = (currentSalary: number = 5000, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.1));
