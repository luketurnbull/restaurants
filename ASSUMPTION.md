# Assumptions

- **Distances not shown** — API provides no distance/location data; would need geolocation API + Google Places to calculate
- **Service type shows "Dine In" only** — derived from `dineIn` boolean in API; no data for Takeaway/Order Online
- **Single image only** — no carousel; API returns one `imageLink` per restaurant
- **"New" badge not shown** — no data field in API to determine new restaurants
- **Header not shown** — adds no value to the app experience
- **Action panel (Menu/Call Us/Location/Favourite) is placeholder** — buttons are non-functional, same for Redeem button
