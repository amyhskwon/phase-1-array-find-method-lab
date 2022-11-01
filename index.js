
function superbowlWin(games) {
    const wonGames = games.find((games)=>{
       games.result === "W";
       })
    if (wonGames) {
       return wonGames.year;
   }
 }