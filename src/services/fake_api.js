class FakeApi {
  static fetchData() {
    return new Promise(resolve => resolve(
      {
        data: [
          {
            firstName: 'John',
            lastName: 'Doe'
          },
          {
            firstName: 'Cinty',
            lastName: 'Ali'
          }
        ]
      }
    ))
  }
}

export default FakeApi;
