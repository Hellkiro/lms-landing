const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    res.render('index',{
        title: 'Main Page',
        isIndex: true        
    });
})

module.exports = router;