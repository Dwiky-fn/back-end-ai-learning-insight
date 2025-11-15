const routes = (handler) => [
  {
    method: 'POST',
    path: '/activities',
    handler: handler.postActivityHandler,
  },
  {
    method: 'GET',
    path: '/activities/{userId}',
    handler: handler.getActivitiesByUserIdHandler,
  },
  {
    method: 'DELETE',
    path: '/activities/{id}',
    handler: handler.deleteActivityByIdHandler,
  },
];

module.exports = routes;
