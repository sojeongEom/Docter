import * as React from 'react';

export default function Connect(url, send_data) {
    axios.post(url, {
            word: send_data
        },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then((response) => {
                synonym = response.data;

                console.log(synonym);
                ReactDOM.render(
                    <SynonymList synonym={synonym} />,
                    document.getElementById('synonym-list')
                )
            })
            .catch((response) => {
                console.log(response)
            });

    return response
  }