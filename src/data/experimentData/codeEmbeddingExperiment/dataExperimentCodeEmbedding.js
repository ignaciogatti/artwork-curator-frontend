import experimentData2 from './experimentData2';
import experimentData3 from './experimentData3';
import experimentData4 from './experimentData4';
import experimentData5 from './experimentData5';
import experimentData from './experimentData';

export const artwork_retrieval_experiment = {
    data : [experimentData, experimentData2, experimentData3, experimentData4, experimentData5],
    service_name : '/artwork/codeembedding/predict/',
    experimentType : 'codeEmbedding'
}