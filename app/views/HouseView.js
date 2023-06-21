export const HousesView = /*HTML*/`
<div class="container-fluid">
  <section class="row">
    <div class="col-12 p-4 d-flex">
      <h1>Houses</h1>
      <button class="btn btn-info ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#houseCollapse"
        aria-expanded="false" aria-controls="houseCollapse">
        Car Form
      </button>
    </div>
  </section>
  <section class="row">
    <div class="col-10 m-auto">
      <div class="collapse" id="houseCollapse">
        <div class="card card-body">
          <form onsubmit="app.HousesController.createHouse(event)">
            <div class="row justify-content-around">
              <div class="col-12 col-md-4 form-group">
                <input type="text" class="form-control" id="usersName" aria-describedby="usersName"
                  placeholder="Name" maxlength="20" name="creatorName">
              </div>
              <div class="col-12 col-md-4 form-group">
                <input type="text" class="form-control" id="houseName" aria-describedby="houseName"
                  placeholder="House Type" maxlength="50" required name="name">
              </div>
            </div>
            <div class="form-group py-2">
              <input type="url" class="form-control" id="houseImg" aria-describedby="houseImg"
                placeholder="House Image" maxlength="300" required name="imgUrl">
            </div>
            <div class="row justify-content-center">
              <div class="col-12 col-md-3 form-group">
                <input type="number" class="form-control" id="houseBeds" aria-describedby="houseBeds"
                  placeholder="Number of Bedrooms" min="1" max="10" required name="bedrooms">
              </div>
              <div class="col-12 col-md-3 form-group">
                <input type="number" class="form-control" id="houseBaths" aria-describedby="houseBaths"
                  placeholder="Number of Bathrooms" min="1" max="10" step=".5" required name="bathrooms">
              </div>
            </div>
            <div class="row justify-content-center py-2">
              <div class="col-12 col-md-3 form-group">
                <input type="number" class="form-control" id="houseYear" aria-describedby="houseYear"
                  placeholder="Year Built" min="1900" max="2023" required name="year">
              </div>
              <div class="col-12 col-md-3 form-group">
                <input type="number" class="form-control" id="houseSqft" aria-describedby="houseSqft"
                  placeholder="Square Feet" min="1" max="10000" required name="sqft">
              </div>
              <div class="col-12 col-md-3 form-group">
                <input type="number" class="form-control" id="housePrice" aria-describedby="housePrice"
                  placeholder="Price" min="1" max="100000000" required name="price">
              </div>
            </div>
            <div class="d-flex flex-column align-items-center form-group">
              <label for="houseDescription">House Description</label>
              <textarea name="houseDescription" id="houseDescription" cols="50" rows="5" name="description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section id="houseCards" class="row">
    
  </section>
</div>
`