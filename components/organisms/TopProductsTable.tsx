'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatNumber } from '@/lib/mock-data';
import type { ProductSales } from '@/lib/types';

type TopProductsTableProps = {
  products: ProductSales[];
  threshold: number;
};

export function TopProductsTable({ products, threshold }: TopProductsTableProps) {
  const filtered = products.filter((p) => p.sales >= threshold);

  return (
    <Card>
      <CardHeader>
        <SectionTitle
          title="Top Products"
          subtitle={
            threshold > 0
              ? `Showing products with sales ≥ ${formatCurrency(threshold)}`
              : 'Best-selling products by revenue'
          }
        />
      </CardHeader>
      <CardContent>
        {filtered.length === 0 ? (
          <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
            No products meet the current sales threshold.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Sales</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {formatNumber(product.quantity)}
                  </TableCell>
                  <TableCell className="text-right font-medium tabular-nums">
                    {formatCurrency(product.sales)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
