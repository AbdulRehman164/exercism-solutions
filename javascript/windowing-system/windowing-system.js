// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    newSize.width = newSize.width < 1 ? 1 : newSize.width;
    newSize.height = newSize.height < 1 ? 1 : newSize.height;

    if (this.position.x + newSize.width > this.screenSize.width)
      newSize.width -= this.position.x + newSize.width - this.screenSize.width;
    if (this.position.y + newSize.height > this.screenSize.height)
      newSize.height -=
        this.position.y + newSize.height - this.screenSize.height;

    this.size = newSize;
  }

  move(newPosition) {
    newPosition.x = newPosition.x < 0 ? 0 : newPosition.x;
    newPosition.y = newPosition.y < 0 ? 0 : newPosition.y;

    if (newPosition.x + this.size.width > this.screenSize.width)
      newPosition.x -= newPosition.x + this.size.width - this.screenSize.width;
    if (newPosition.y + this.size.height > this.screenSize.height)
      newPosition.y -=
        newPosition.y + this.size.height - this.screenSize.height;

    this.position = newPosition;
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
