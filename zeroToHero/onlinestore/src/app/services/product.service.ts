import { HttpClient, HttpContext, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, map } from 'rxjs/operators';
import { ProblemDetails } from 'src/app/models/exception.model';
import { ProductData, ProductResponse } from 'src/app/models/product.model';
import { API_BASE_URL, blobToText, throwException } from 'src/app/util/service.util';
import { List, Pagination } from '../models/pagination.model';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient) {
        this.http = http;
        this.baseUrl = "";
    }

    /**
     * Create Product
     * @param body (optional) 
     * @return Success
     */
    createProduct(body?: ProductData | undefined, httpContext?: HttpContext): Observable<string> {
        let url_ = this.baseUrl + "/api/Product";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            context: httpContext,
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processCreateProduct(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateProduct(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<string>;
                }
            } else
                return _observableThrow(response_) as any as Observable<string>;
        }));
    }

    protected processCreateProduct(response: HttpResponseBase): Observable<string> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as string;
                return _observableOf(result200);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result401: any = null;
                result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result400: any = null;
                result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("Server Error", status, _responseText, _headers);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * List Product
     * @param categoryId (optional) 
     * @param pageNumber (optional) 
     * @param pageSize (optional) 
     * @return Success
     */
    listProducts(categoryId?: string | undefined, pageNumber?: number | undefined, pageSize?: number | undefined, httpContext?: HttpContext): Observable<List<ProductResponse>>  {
        let url_ = this.baseUrl + "/api/Product?";
        if (categoryId === null)
            throw new Error("The parameter 'categoryId' cannot be null.");
        else if (categoryId !== undefined)
            url_ += "CategoryId=" + encodeURIComponent("" + categoryId) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "PageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response"  as 'response',
            responseType: "blob",
            context: httpContext,
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

      /*  return this.http.request("get", url_, options_).pipe(
            _observableMergeMap((response_ : any) => {
                let result = new List<ProductResponse>({
                    pagination: response_.headers.get('pagination'),
                    items: <ProductResponse[]> response_.body                    
                });
                return _observableOf(result);
            })
        )*/

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processListProducts(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processListProducts(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<List<ProductResponse>>;
                }
            } else
                return _observableThrow(response_) as any as Observable<List<ProductResponse>>;
        }));
    }

    protected processListProducts(response: HttpResponseBase): Observable<List<ProductResponse>> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) {
            for (let key of response.headers.keys()) {
       
                _headers[key] = response.headers.get(key);
            }
        }
    
        if (status === 200) {
           // let pagination: Pagination = JSON.parse(_headers['Pagination'], this.jsonParseReviver) as Pagination;
            return blobToText(responseBlob).pipe<any>(_observableMergeMap((_responseText: string) => {
                let result200: List<ProductResponse> | null = null;
                result200 = _responseText === "" ? null : new List<ProductResponse>({
                    items: JSON.parse(_responseText, this.jsonParseReviver) as ProductResponse[],
                    pagination: JSON.parse(_headers['pagination'], this.jsonParseReviver) as Pagination
                });
                return _observableOf(result200);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result401: any = null;
                result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result400: any = null;
                result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result404: any = null;
                result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("Server Error", status, _responseText, _headers);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Delete Product
     * @return Success
     */
    deleteProduct(productId: string, httpContext?: HttpContext): Observable<void> {
        let url_ = this.baseUrl + "/api/Product/{productId}";
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId));
        url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response",
            responseType: "blob",
            context: httpContext,
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processDeleteProduct(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteProduct(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processDeleteProduct(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return _observableOf(null as any);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result401: any = null;
                result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result400: any = null;
                result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result404: any = null;
                result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("Server Error", status, _responseText, _headers);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Detail Product
     * @return Success
     */
    detailProduct(productId: string, httpContext?: HttpContext): Observable<ProductResponse> {
        let url_ = this.baseUrl + "/api/Product/{productId}";
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId));
        url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response",
            responseType: "blob",
            context: httpContext,
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processDetailProduct(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDetailProduct(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ProductResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ProductResponse>;
        }));
    }

    protected processDetailProduct(response: HttpResponseBase): Observable<ProductResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProductResponse;
                return _observableOf(result200);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result401: any = null;
                result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result400: any = null;
                result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result404: any = null;
                result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("Server Error", status, _responseText, _headers);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * Edit Product
     * @param body (optional) 
     * @return Success
     */
    editProduct(productId: string, body?: ProductData | undefined, httpContext?: HttpContext): Observable<void> {
        let url_ = this.baseUrl + "/api/Product/{productId}";
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            context: httpContext,
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processEditProduct(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processEditProduct(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processEditProduct(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return _observableOf(null as any);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result401: any = null;
                result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result400: any = null;
                result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result404: any = null;
                result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
                return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("Server Error", status, _responseText, _headers);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}