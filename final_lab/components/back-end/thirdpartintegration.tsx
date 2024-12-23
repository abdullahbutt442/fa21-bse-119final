import Shippo from 'shippo';

const shippo = new Shippo('your-shippo-api-key');

const createShipment = async () => {
  const shipment = await shippo.shipments.create({
    address_from: { ... },
    address_to: { ... },
    parcel: { ... },
  });

  return shipment;
};
