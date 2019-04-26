export const LOAD_DATA = "LOAD_DATA";
export const LOAD_OBJECT_VIEW = "LOAD_OBJECT_VIEW";

export const loadData = (data: any) => ({
  type: LOAD_DATA,
  playload: data
});

export const loadObjectViewData = (data: any) => ({
  type: LOAD_OBJECT_VIEW,
  playload: data
});
