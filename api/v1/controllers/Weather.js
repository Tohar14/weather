const API_KEY = process.env.API_KEY;

module.exports = {
    apiAutoComplete: async (req, res) => {
        try {
            const q = req.body.q;
            const stringFetch = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${q}&language=en-us`;
            const response = await fetch(stringFetch);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.length > 0) {
                return res.status(200).json({ key: data[0].Key, name: data[0].LocalizedName });
            } else {
                return res.status(404).json({ message: "No data found" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    apiLocationWeatherDaily: async (req, res) => {
        try {
            const LocationCode = req.body.LocationCode;
            const stringFetch = `http://dataservice.accuweather.com/currentconditions/v1/${LocationCode}?apikey=${API_KEY}&language=en-us&details=true`;
            const response = await fetch(stringFetch);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: "No data found" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    apiLocationWeatherFiveDays: async (req, res) => {
        try {
            const LocationCode = req.body.LocationCode;
            const stringFetch = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${LocationCode}?apikey=${API_KEY}&language=en-us&details=false&metric=true`;
            const response = await fetch(stringFetch);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.DailyForecasts && data.DailyForecasts.length > 0) {
                let result = data.DailyForecasts.map(element => ({
                    date: element.Date,
                    Temperature: element.Temperature.Minimum.Value,
                    Day: element.Day,
                    Night: element.Night
                }));

                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: "No data found" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    }
};
