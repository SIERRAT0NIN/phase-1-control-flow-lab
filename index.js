function scuberGreetingForFeet(customer) {
  // Write your code here!
  if (customer <= 400) {
    return "This one is on me!";
  } else if (customer <= 2000 && customer >= 400) {
    return "That will be twenty bucks.";
  } else if (2000 < customer && customer <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  // if (city === "NYC") {
  //   return "Ok, sounds good.";
  // } else {
  //   return "No go.";
  // }

  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipString) {
  // Write your code here!}
  switch (tipString) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
