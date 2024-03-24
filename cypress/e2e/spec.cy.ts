// TODO move to fixtures and fix import error
const weatherResponse = 
  {
    "locationName": "15201, USA",
    "data": [
        {
            "datetimeStr": "2024-03-20T00:00:00-04:00",
            "precipitation": 1
        },
        {
            "datetimeStr": "2024-03-21T00:00:00-04:00",
            "precipitation": 0.2
        },
        {
            "datetimeStr": "2024-03-22T00:00:00-04:00",
            "precipitation": 0.09
        }
    ]
}

describe('Garden App', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('has page title', () => {
    cy.get('[data-cy="page-title"]').should('exist')
  });

  it('has zip input field', () => {
    cy.get('[data-cy="zip-input"]').type('15201')
  });

  describe.skip('Weather API', () => {
    const zip = '15201';
    // TODO add environment url
    beforeEach(() => {
      cy.intercept(
        "GET",
        'http://localhost:5200/weather/' + zip,
        (req) => {
          req.reply({body: weatherResponse, statusCode: 200})
        }
      ).as("WeatherLookupRequest");
      cy.get('[data-cy="zip-input"]').type(zip);
      cy.get('[data-cy="zip-input"]').click();
      cy.wait("@WeatherLookupRequest");
    });
    it('shows decision', () => {
      cy.get(('[data-cy="decision"]')).should('exist')
    })
  });
})