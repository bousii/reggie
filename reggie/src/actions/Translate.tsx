export default function Translate(input: string) {
  if (input.toLowerCase().includes("reggie") && input.length <= 500) {
    return "REGGIE!";
  } else if (input.length <= 500) {
    return input;
  } else {
    return "Yapster";
  }
}
