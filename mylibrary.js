function bounceOff(vall1, vall2){
    if (vall1.x - vall2.x < vall2.width/2 + vall1.width/2
      && vall2.x - vall1.x < vall2.width/2 + vall1.width/2) {
    vall1.velocityX = vall1.velocityX * (-1);
    vall2.velocityX = vall2.velocityX * (-1);
  }
  if (vall1.y - vall2.y < vall2.height/2 + vall1.height/2
    && vall2.y - vall1.y < vall2.height/2 + vall1.height/2){
    vall1.velocityY = vall1.velocityY * (-1);
    vall2.velocityY = vall2.velocityY * (-1);
  }
  }