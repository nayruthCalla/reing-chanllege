/*eslint-disable */
import { fireEvent, screen, userEvent } from '@storybook/testing-library'
import SelectCustom from './index.js'
import selectValues from '../../../utils/selectValues'

export default {
  title: 'Layout/SelectCustom',
  component: SelectCustom,
}

const Template = (args) => <SelectCustom {...args} />

export const Basic = Template.bind({})
Basic.args = {
  defaultValue: 'Select',
  options: selectValues,
}
