/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  if(month <= 0 || month > 12){
    return null;
  }
  let season1 = "";

  if([12,1,2].includes(month)){
    season1 = "Winter";
  }
  else if ([3,4,5].includes(month)){
    season1 = "Spring";
  }
  else if ([6,7,8].includes(month)){
    season1 = "Summer";
  }
  else{
    season1 = "Autumn"
  }

  let activity1 = "";
  let temp = temperature;

  if (season1 === "Winter") {
    if (temp < 0) activity1 = "skiing";
    else activity1 = "ice skating";
  }

  else if (season1 === "Spring") {
    if (temp > 20) activity1 =  "hiking";
    else activity1 =  "museum visit";
  }

  else if (season1 === "Summer") {
    if (temp > 35) activity1 =  "swimming";
    else activity1 =  "cycling";
  }

  else if (season1 === "Autumn") {
    if (temp > 15) activity1 =  "nature walk";
    else activity1 = "reading at a cafe";
  }
return { season: season1, activity: activity1}

}
