  function superbowlWin(record){
  const winningRecord = record.find(obj => obj.result === "W");
    if (winningRecord){
        return winningRecord.year
    }
}