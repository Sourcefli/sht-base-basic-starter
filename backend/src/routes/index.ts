import { Sheetbase } from '../index';

export default () => {

  const router = Sheetbase.Router;

  router.get('/', (req, res) => {
    return res.render('index');
  });

  router.post('/', (req, res) => {
    return res.success({ title: 'Sheetbase Backend' });
  });

};
