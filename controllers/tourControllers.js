exports.geAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    noofResults: tours.length,
    data: {
      tours,
    },
  });
};
exports.getTour = (req, res) => {
  const id = req.params.id * 1; //id is in strings, converted into an integer by multiplying by an integer
  const tour = tours.find((element) => element.id === id);
  if (!tour) {
    res.status(404).json({
      status: 'Failed',
      message: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  console.log(req.requestTime);
  if (req.params.id * 1 > tours.length) {
    return (
      res.status(404),
      json({
        status: 'Fail',
        message: 'Invalid ID',
      })
    );
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};
exports.deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return (
      res.status(404),
      json({
        status: 'Fail',
        message: 'Invalid ID',
      })
    );
  }
  res.status(200).json({
    status: 'success',
    message: 'Tour deleted Successfully',
  });
};
