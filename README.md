fis-optimizer-cssshrink
=======================

### install

+ Unix / Linux

    ```bash
    $ npm install -g fis-optimizer-cssshrink
    ```
+ Windows

    Open a cmd.

    ```
    npm install -g fis-optimizer-cssshrink
    ```

### use

add code

```javascript
fis.config.set('modules.optimizer.css', 'cssshrink');
```

to `fis-conf.js`

when release add option `-o`.

eg:

```bash
$ fis release -o 
```
