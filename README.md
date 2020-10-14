# snoweb
Falling snowflakes for your website and christmas mood ❄️

## Why snoweb?
1. Everyone loves snow
2. Zero config although you can pass some configuration
3. Easy to use

## Quick start
### Step 1: Install

`npm install snoweb --save`

or

`yarn add snoweb`

### Step 2: Import and use

```typescript
import { Snoweb } from 'snoweb';

const snoweb = new Snoweb();
snoweb.start();
```

### Step 3: Enjoy
![snowfall](https://user-images.githubusercontent.com/15265894/96039109-d3f35e00-0e70-11eb-9a99-cca027c0257d.gif)

## Tips
### Tip 1: Configure your snowfall
You can provide configuration object `Partal<SnowebConfig>` into the constructor.
See the description in the [API section](#SnowebConfig)
```typescript
const snoweb = new Snoweb({
  gravity: 20,
  snowflakesColor: 'red',
  snowflakesCount: 200,
  zIndex: 1000,
});
``` 

### Tip 2: Smooth stop + destroy
By default `snoweb.stop()` method just smoothly stops the snowfall animation. However, the DOM element still remains.
If you want to stop and fully destroy it you can do the following:
```
const snoweb = new Snoweb();
snoweb.start();
// ...
snoweb.stop(() => snoweb.destroy());
``` 

## API
### Snoweb

| Methods                                      | What it does?                                                                                                                                                    |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| constructor(config: Partial\<SnowebConfig\>) | Default constructor which is executed after you have called `new Snoweb()`.                                                                                      |
| start(): void                                | Begins the snowfall. Ho-ho-ho 🎅                                                                                                                                  |
| stop(afterStopCallback?: () =>  void): void  | Stops the snowfall. `afterStopCallback?: () => void` - a callback function which is called after the snowfall is fully stopped (all the snowflakes have fallen). |
| destroy(): void                              | Stops the snowfall immediately and destroys the DOM element                                                                                                      |
| isStarted(): boolean                         | Shows whether the snowfall is being started                                                                                                                      |

### SnowebConfig
| Property                                     | What it does?                                                             | Default value |
|----------------------------------------------|---------------------------------------------------------------------------|---------------|
| snowflakesCount: number | Exact count of the snowflakes to be rendered. Might affect performance if the value is too big.| 100           |
| gravity: number         | The higher the value the faster the snowflakes will fall                                       | 10            |
| snowflakesColor: string | CSS color of the snowflakes                                                                    | '#fff'        |
| zIndex: number          | Snowfall z-index                                                                               | 1000000       |

## Check it out on Stackblitz
https://stackblitz.com/edit/snoweb?file=index.js
