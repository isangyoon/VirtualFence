const UNITS = {
  "degrees" : 57.2957795,
  "radians" : 1,
  "m"       : 6373000,
  "km"      : 6373
};

function RadiansToDistance(radians, unit)
{
  return radians * UNITS[unit || 'm'];
}

module.exports.RadiansToDistance = RadiansToDistance;

function DistanceToRadians(distance, unit)
{
  return distance / UNITS[unit || 'm'];
}

module.exports.DistanceToRadians = DistanceToRadians;

function DistanceToDegrees(distance, unit)
{
  return (distance / UNITS[unit || 'm']) * UNITS.degrees;
}

module.exports.DistanceToDegrees = DistanceToDegrees;

function GetCoordinates(geojson)
{
  if (Array.isArray(geojson) && typeof geojson[0] === 'number' && typeof  geojson[1] === 'number')
  {
    return geojson;
  }
  else if (geojson)
  {
    switch (geojson.type)
    {
      case 'Feature':
        if (geojson.geometry && geojson.geometry.type === 'Point' && Array.isArray(geojson.geometry.coordinates))
        {
          return geojson.geometry.coordinates;
        }

        break;

      case 'Point':
        if (Array.isArray(geojson.coordinates))
        {
          return geojson.coordinates;
        }

        break;

      default:
        throw new Error('Invaild input format');
    }
  }
}

module.exports.GetCoordinates = GetCoordinates;
