var time = moment().format('HH'),
      beforeTime = item.startTime,
      afterTime = item.endTime;
    if (time >= afterTime) {
      if(time === afterTime) {
        return 'green';
      } else {
        return 'pink';
      }
    } else {
      var beginningTime = moment(beforeTime);
      var endTime = moment(afterTime);
      console.log(beginningTime.isBefore(endTime));
      return '#3260a8';
    }