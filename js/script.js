var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

// listen for subscription change
subTypeElement.addEventListener("change", (e) => {
  console.log((subType = e.target.value));
  updateSubscriptionDiv();
});

// listen for duration change
subDurationElement.addEventListener("change", (e) => {
  console.log((subDuration = Number(e.target.value)));
  updateSubscriptionDiv();
});

// update subscription
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;

  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var totalCost = monthlyCost * subDuration;
  result.innerText = `You have chosen a ${subDuration} ${subType} month plan for $${totalCost}`;
};
