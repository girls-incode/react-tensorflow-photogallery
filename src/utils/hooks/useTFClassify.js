import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

function useTFClassify() {
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  function predict(img) {
    setLoading(true);
    try {
      mobilenet.load().then((model) => {
        model.classify(img).then((predictions) => {
          setPredictions(predictions);
          setLoading(false);
        });
        setLoading(false);
      });
    } catch (er) {
      console.log(er);
    }
  }
  return { predict, predictions, setPredictions, loading };
}

export default useTFClassify;
