import { action } from 'typesafe-actions'

import { styleTypes, bg_Main } from './types'

export const updateStyle = (data:bg_Main[])=> action( styleTypes.UPDATED_BACKGROUND,data);