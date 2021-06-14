const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    res.render('index',{
        title: 'Python для начинающих',
        isIndex: true        
    });
})

module.exports = router;