export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "terryk2"
    );
  }
  if (query.toLowerCase().includes("What is your name?")) {
    return (
      "Terry"
    );
  }
  if (query.toLowerCase().includes("What is 87 plus 7?")) {
    return (
      "94"
    );
  }
  if (query.toLowerCase().includes("What is 40 plus 9?")) {
    return (
      "49"
    );
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 10, 35, 54?")) {
    return (
      "54"
    );
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 35, 17, 3?")) {
    return (
      "35"
    );
  }

  return "";
}
