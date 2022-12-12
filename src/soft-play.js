// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) return false
    else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    // A child is not attempting to leave without an adult
    // The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
    // Every child leaving the soft play center is accompanied by at least 1 adult.
    // The number of adults and children attempting to leave is not greater than the number currently inside the center

    if (
      numChildren > numAdults ||
      this.numChildren - numChildren > this.numAdults - numAdults ||
      this.numAdults + this.numChildren < numAdults + numChildren
    ) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }

  total() {
    return this.numAdults + this.numChildren
  }
}

const funCentre = new Softplay(6, 6)
// const clownworld = new Softplay(10, 400)
console.log(funCentre.enter(2, 3))
console.log(funCentre.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
