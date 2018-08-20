# next-ts-mobx-boilerplate
TodoList boilerplate build by React, next.js, typescript, mobx, webpack

# Usage
- 1. Init project
```
npm install

```
- 2. Build typescript
```
npm run tsc:w
```
- 3. Open a new tab and run project
```
npm run dev
```

# Feature

- 1.Server Side Render
- 2.Webpack In Out of The Box
- 3.Typescript
- 4.State Management in Simple Way
- 5.CSS module and Typed CSS

# Directory Structure

```

 ------------------------------------------------------------------     -----------     -----------
|                                                                  |   |           |   |           |
|                           Pages                                  |   |           |   |           |
|                                                                  |   |           |   |           |
 ------------------------------------------------------------------    |           |   |           |
         |                                        |                    |           |   |           |
        \ /                                      \ /                   |           |   |           |
 ---------------------            ---------------------------------    |           |   |           |
|                     |          |                                 |   |           |   |           |
|     Components      |          |              Models             |   |           |   |           |
| (Always stateless)  |          |   (Deal pages states with Mobx) |   |   Util    |   |  Typings  |
|                     |          |                                 |   |           |   |           |
 ---------------------            ---------------------------------    |           |   |           |
                                                  |                    |           |   |           |
                                                 \ /                   |           |   |           |
                                   --------------------------------    |           |   |           |
                                  |                                |   |           |   |           |
                                  |            Services            |   |           |   |           |
                                  |  (Connect with Back End. Stay  |   |           |   |           |
                                  |    same with Domain Model as   |   |           |   |           |
                                  |     possible)                  |   |           |   |           |
                                   --------------------------------     -----------     -----------


```
