# TenoxUI Styler

## Usage

### React

```javascript
import { useLayoutEffect } from '@nousantx/tenoxui/styler'
import { init, createConfig } from '@nousantx/tenoxui/styler'

export function App() {
  useLayoutEffect(() => {
    const config = createConfig({
      property: { bg: 'background' }
    })

    init(config, '*[class]')
  }, [])

  return <div class="bg-red"></div>
}
```

### HTML / UMD

```html
<script src="https://cdn.jsdelivr.net/npm/@nousantx/tenoxui-styler@0.1.0/dist/index.umd.min.js"></script>
<script>
  const config = __nsx_styler.createConfig({
    property: { bg: 'background' }
  })

  __nsx_styler.init(config, '*[class]')
</script>
```

## LICENSE

MIT
