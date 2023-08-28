module.exports = () => {
  const { faker, fa } = require("@faker-js/faker");
  var _ = require("lodash");

  return {
    cards: _.times(10, function (n) {
      return {
        cardId: faker.string.nanoid(),
        data: {
          type: "cards",
          id: faker.string.nanoid({ min: 32, max: 32 }) + "mcrd", // 32 + 4 => 36
          relationships: {
            holder: {
              data: {
                type: "customer",
                id: faker.string.nanoid({ min: 32, max: 32 }) + "cust", // 32 + 4 => 36
              },
            },
            accounts: {
              data: {
                type: "account",
                id: faker.string.nanoid({ min: 32, max: 32 }) + "cacc", // 32 + 4 => 36
              },
            },
          },
          attributes: {
            status: "ACTIVE",
            card_type: "VISA_CREDIT",
            scheme: "VISA",
            is_virtual: false,
            is_replacement_ordered: false,
            expires_at: faker.date.future().toISOString(),
            created_at: faker.date.past().toISOString(),
            card_options: {
              design: {
                card_color: faker.vehicle.color().toUpperCase(),
              },
            },
            representation: {
              line1: faker.person.fullName(),
              line2: faker.location.streetAddress(),
              masked_pan: faker.finance.maskedNumber(),
              formatted_expiration_date: faker.date
                .future()
                .toLocaleDateString(),
            },
            spending_controls: {
              online_payments_allowed: faker.datatype.boolean(),
              allowed_region: faker.location.country().toUpperCase(),
              allowed_categories: [
                faker.commerce.department(),
                faker.commerce.department(),
              ],
            },
          },
        },
      };
    }),
  };
};
